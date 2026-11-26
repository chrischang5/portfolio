import { HashLink } from "react-router-hash-link";

export function Link({ route, onClick }) {
  const routelink = `#${route}`;
  return (
    <HashLink to={routelink} onClick={onClick}>
      <div className="group transition delay-150 ease-in-out">
        <div className="border-b border-accent py-2 duration-300 hover:-translate-y-1 hover:scale-110">
          <span className="font-source-code text-paragraph text-light group-hover:text-accent-100">
            &lt;{route}/&gt;
          </span>
        </div>
      </div>
    </HashLink>
  );
}
