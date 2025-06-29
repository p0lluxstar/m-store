import Image from 'next/image';
import { JSX } from 'react';

const FooterBottom = (): JSX.Element => {
  return (
    <div className="bg-[#36393f] py-5 text-[var(--white-ca)]">
      <div className="max-w-[var(--content-max-width)] mx-auto">
        <div className="flex justify-between">
          <div className="col-md-7 col-lg-6">
            <p className="copyright">© 2025 Все права защищены</p>
          </div>
          <div className="col-md-5 col-lg-6">
            <div className="payment">
              <Image
                src={'/img/webp/payment-card.webp'}
                width={192}
                height={21}
                alt="Payment Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
