import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen p-8" style={{ background: "#050008" }}>
          <div className="flex flex-col items-center w-full max-w-lg p-8 text-center">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#FF4500" strokeWidth="1.5" className="mb-6">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
              <line x1="12" y1="9" x2="12" y2="13"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>

            <h2 className="text-xl mb-4 text-white" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
              Ocorreu um erro inesperado.
            </h2>
            <p className="text-sm mb-8" style={{ color: "#888" }}>
              Algo deu errado ao carregar esta página. Tente recarregar.
            </p>

            <button
              onClick={() => window.location.reload()}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold"
              style={{ background: "linear-gradient(90deg, #FF4500, #FF6B00, #FFB800)", fontFamily: "'Poppins', sans-serif" }}
            >
              Recarregar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
