import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { email, cargo, empresa } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email obrigatório" });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID);

  if (!apiKey || !Number.isFinite(listId) || listId <= 0) {
    console.error("[lead] configuração inválida:", {
      temChave: Boolean(apiKey),
      listIdBruto: process.env.BREVO_LIST_ID,
    });
    return res.status(500).json({ error: "Erro ao enviar lead", brevoStatus: "config" });
  }

  const createContact = (attributes: Record<string, string>) =>
    fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
        attributes,
      }),
    });

  try {
    let response = await createContact({
      SOURCE: "ebook",
      ...(cargo ? { CARGO: cargo } : {}),
      ...(empresa ? { EMPRESA: empresa } : {}),
    });

    if (!response.ok) {
      console.error("[lead] 1a tentativa falhou:", response.status, await response.text());
      response = await createContact({ SOURCE: "ebook" });
    }

    if (!response.ok) {
      const text = await response.text();
      console.error("[lead] Brevo recusou:", response.status, text);
      return res.status(500).json({ error: "Erro ao enviar lead", brevoStatus: response.status });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("[lead] erro inesperado:", error);
    return res.status(500).json({ error: "Erro ao enviar lead" });
  }
}
