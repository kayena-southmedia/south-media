import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email obrigatório" });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID_CONTACT);

  if (!apiKey || !Number.isFinite(listId) || listId <= 0) {
    console.error("[contato] configuração inválida:", {
      temChave: Boolean(apiKey),
      listIdBruto: process.env.BREVO_LIST_ID_CONTACT,
    });
    return res.status(500).json({ error: "Erro ao enviar lead", brevoStatus: "config" });
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
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
        attributes: {
          SOURCE: "contato",
        },
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("[contato] Brevo recusou:", response.status, text);
      return res.status(500).json({ error: "Erro ao enviar lead", brevoStatus: response.status });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("[contato] erro inesperado:", error);
    return res.status(500).json({ error: "Erro ao enviar lead" });
  }
}
