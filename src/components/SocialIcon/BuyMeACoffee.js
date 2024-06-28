import { useEffect } from 'react';

const BuyMeACoffee = () => {
  useEffect(() => {
    const scriptId = "bmc-widget";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.setAttribute("data-name", "BMC-Widget");
      script.setAttribute("data-cfasync", "false");
      script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
      script.setAttribute("data-id", "shreyashhatkar");
      script.setAttribute("data-description", "Support me on Buy me a coffee!");
      script.setAttribute("data-message", "Thank you for visiting. You can buy me a coffee.");
      script.setAttribute("data-color", "#5F7FFF");
      script.setAttribute("data-position", "Right");
      script.setAttribute("data-x_margin", "18");
      script.setAttribute("data-y_margin", "18");

      script.async = true;
      script.onload = () => console.log("Buy Me a Coffee widget loaded");
      script.onerror = (e) => console.error("Failed to load Buy Me a Coffee widget", e);

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return null; // This component does not render anything visible
};

export default BuyMeACoffee;
