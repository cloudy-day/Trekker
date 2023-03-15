import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import './QRCode.module.css'
import styles from "./QRCode.module.css"
const QrCode = () => {
  const [url, setUrl] = useState("");

  const qrRef = useRef();

  const downloadQRCode = (e) => {
    e.preventDefault();
    let canvas = qrRef.current.querySelector("canvas");
    let image = canvas.toDataURL("image/png");
    let anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = `${url}.png`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    setUrl("");
  };

  const qrCodeEncoder = (e) => {
    setUrl(e.target.value);
  };

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={url}
      size={300}
      bgColor={"#FFF"}
      level={"H"}
    />
  );

  return (
    <div className={styles.qrcode__container}>
      <div ref={qrRef} className={styles.qrcode}>{qrcode}</div>
      <div className={styles.input__group}>
        <form onSubmit={downloadQRCode} className={styles.container}>
          <label><b>Enter Medicne Name - Batch ID</b></label>
          <input
            type="text"
            value={url}
            onChange={qrCodeEncoder}
            placeholder="Follow this syntax MedicineName-BatchNo"
            className={styles.input}
          />
          <button type="submit" disabled={!url} className={styles.btn}>
            Download QR code
          </button>
        </form>
      </div>
    </div>
  );
};

export default QrCode;
