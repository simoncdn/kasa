import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export default function Toast() {
  return (
    <ToastContainerStyled className="toaster" bodyClassName="body-toast" />
  );
}

const ToastContainerStyled = styled(ToastContainer)`
  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    border-radius: 5px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    background: rgba(49, 49, 49, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.34);
    backdrop-filter: blur(9.1px);
    -webkit-backdrop-filter: blur(9.1px);
    font-size: 14px;
  }
  .Toastify__progress-bar-theme--dark {
    background-color: #ff6060;
  }
  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 14px;
      margin-left: 5px;
      font-size: 20px;
      color: Yellow;
    }
    div {
      line-height: 1.3em;
    }
  }
`;
