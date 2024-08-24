import { useTheme } from "@/context/themeContext";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Switch } from "../ui/switch";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

const Header = () => {
  const { setTheme, theme } = useTheme();

  const [position, setPosition] = useState("English");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [theme]);

  return (
    <header className="flex items-center justify-around   py-3 border-b border-spacing-x-5 border-solid">
      <div>
        <h1 className="text-xl">Dev Fernandes</h1>
      </div>
      <div></div>
      <div className="flex gap-10 items-center justify-between">
        <div className="flex w-2/4 gap-9 items-center">
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button
                  className={`bg-transparent border hover:bg-transparent w-24 ${
                    isChecked
                      ? "border-gray-300 text-gray-300 hover:bg-white hover:text-black"
                      : "border-gray-700 text-gray-700 hover:bg-black hover:text-white"
                  }`}
                >
                  {position}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-10">
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <DropdownMenuRadioItem
                    className="hover:cursor-pointer"
                    value="English"
                  >
                    English
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem
                    className="hover:cursor-pointer"
                    value="Portuguese"
                  >
                    Portuguese
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem
                    className="hover:cursor-pointer"
                    value="Spanish"
                  >
                    Spanish
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex gap-2">
            <Sun strokeWidth={2} color={`${isChecked ? "gray" : "black"}`} />
            <Switch
              checked={isChecked}
              className="data-[state=unchecked]:bg-black"
              onClick={() => toggleTheme()}
            />
            <Moon strokeWidth={2} color={`${isChecked ? "white" : "gray"}`} />
          </div>
        </div>
        <Avatar className="h-14 w-14">
          <AvatarImage src="/images/profile.png" alt="Profile picture" />
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
