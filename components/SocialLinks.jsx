import { NETWORKS } from "@/lib/site";
import { Social } from "./Icons";

export default function SocialLinks({ className = "social" }) {
  return (
    <ul className={className}>
      {NETWORKS.map(([name, url]) => {
        const Icon = Social[name];
        return (<li key={name}><a href={url} aria-label={`GéneroLab en ${name}`} rel="noopener"><Icon /></a></li>);
      })}
    </ul>
  );
}
