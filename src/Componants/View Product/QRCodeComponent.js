import React from 'react';
import QRCode from 'react-qr-code';

const QRCodeComponent = ({ qrCodeUrl }) => {
  return (
    <div className="text-center">
      <QRCode value={qrCodeUrl} />
    </div>
  );
};

export default QRCodeComponent;
