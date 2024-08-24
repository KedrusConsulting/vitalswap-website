import batesGroupLogo from "../../assets/batesgroup-logo.png";
import dojahLogo from "../../assets/dojah.png";
import elevateVenturesLogo from "../../assets/elevate-ventures.png";
import beNimbleCoLogo from "../../assets/be-nimble-co.png";
import googleLogo from "../../assets/google.png";
import awsLogo from "../../assets/aws.png";
import slackLogo from "../../assets/slack.png";
import safeHeavenLogo from "../../assets/safe-haven-mfb.png";

const images = [
  { name: "Bates group logo", src: batesGroupLogo },
  { name: "Dojah logo", src: dojahLogo },
  { name: "Elevate ventures logo", src: elevateVenturesLogo },
  { name: "Be nimble co logo", src: beNimbleCoLogo },
  { name: "Google logo", src: googleLogo },
  { name: "AWS logo", src: awsLogo },
  { name: "Slack logo", src: slackLogo },
  { name: "Safe Heaven logo", src: safeHeavenLogo },
];

const PoweredBy = () => {
  return (
    <div className="powered-by">
      <h4>Powered By</h4>

      <div className="powered-by__logos">
        {images.map((img) => (
          <img
            className="powered-by__logo"
            key={img.name}
            src={img.src}
            alt={img.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PoweredBy;
