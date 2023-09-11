import { HashLink } from "react-router-hash-link";

export function Link({ route }) {
  const routelink = `#${route}`;
  return (
    <div className="group transition ease-in-out delay-150">
      <div className="py-2 border-b border-spacing-8 border-accent group-hover:border-neutral hover:-translate-y-1 hover:scale-110 duration-300">
        <HashLink to={routelink}>
          <span className="font-source-code text-paragraph text-light group-hover:text-accent-100">
            &lt;{route}/&gt;
          </span>
        </HashLink>
      </div>
    </div>
  );
}
