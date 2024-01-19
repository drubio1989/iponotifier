"use client";

const Footer = () => {
  return (
      <footer>
        <div className="bg-teal-500">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-5">
            <p className="text-center text-lg text-body-color text-white font-bold font-mono">
              Disclaimer:
            </p>
            <p className="px-12 pb-5 text-center text-sm text-body-color text-white font-bold font-mono">
              The information provided on this website is for general informational purposes only and does not constitute financial advice. Initial Public Offering Notifier is not a registered financial advisor. You should not rely on the information on this website as financial or investment advice. Always consult with a qualified financial advisor before making any investment decisions.
              Investing in financial markets carries inherent risks. Past performance is not indicative of future results. Initial Public Offering Notifier does not guarantee the accuracy, completeness, or timeliness of the information on this website. You acknowledge that any reliance on such information is at your own risk.
              While we strive to provide accurate and up-to-date information, Initial Public Offering Notifier makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information provided on this website.
              Initial Public Offering Notifier reserves the right to modify or update this disclaimer at any time without notice. It is your responsibility to check this disclaimer periodically for changes.
            </p>
          </div>
        </div>
      </footer>
    
  );
};

export default Footer;
