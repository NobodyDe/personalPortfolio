import Avatar from "./Avatar";
import NavLink from "./NavLink";
import Text from "./Text";

export default function Sidebar() {
  return (
    <aside className="sticky top-0 h-screen w-42.5 py-20 flex flex-col gap-6 shrink-0">
      <div className="flex flex-col gap-2">
        <Avatar src="https://avatars.githubusercontent.com/u/129473274?v=4" />
        <Text as="h2" variant="heading-lg">
          Henrique Santos
        </Text>
        <Text as="p" variant="subHeading-sm">
          Software Engineer
        </Text>
      </div>
      <ul className="flex flex-col gap-2">
        {["home", "letters", "drops", "stack"].map((item, index) => (
          <NavLink
            key={item}
            href={item}
            themes={index + 1}
            className="capitalize"
          >
            {item}
          </NavLink>
        ))}
      </ul>
    </aside>
  );
}
