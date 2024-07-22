import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect } from "react";

const itemsMenu = ["Cursos finalizados", "Cursos en progreso", "Nuevos Cursos"];

export const Courses = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const scrollingItem = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="fixed flex items-center top-16 dark:shadow-xl dark:shadow-[#09090B] dark:bg-[#09090B]/95 bg-white shadow-none z-10 w-[99%] h-[60px]">
        <NavigationMenu className="mx-auto shadow-sm dark:shadow-black shadow-zinc-300 dark:bg-[#09090B] bg-white my-[60px]">
          <NavigationMenuList className="mx-auto">
            {itemsMenu.map((itemMenu, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  onClick={() => scrollingItem(itemMenu)}
                  className={navigationMenuTriggerStyle()}
                >
                  {itemMenu}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div
        className="block overflow-y-hidden
  scroll-smooth w-full h-[100%] pt-20"
      >
        {itemsMenu.map((itemMenu, index) => (
          <div
            id={itemMenu}
            key={index}
            className="w-[80%] mx-auto h-[250px]"
          >
            <h2 className="font-bold p-3">{itemMenu}</h2>
            <Carousel
              opts={{
                align: "start",
              }}
              className=""
            >
              <CarouselContent className="w-full flex justify-start h-[147px]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="flex flex-col justify-around md:mx-3 mx-auto h-full w-[263px]">
                      <CardHeader>
                        <CardTitle>Course {index + 1} Title</CardTitle>
                        <CardDescription>Provisorio</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-red-600 w-[90%] h-12 mx-auto rounded-md">
                          Course Imagen
                        </div>
                      </CardContent>
                      <CardFooter>
                        <p>Course Detail</p>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            {/* <hr className="mt- border-none" /> */}
          </div>
        ))}
      </div>
      <div className="h-32"></div>
    </div>
  );
};
