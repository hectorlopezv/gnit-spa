import Banner from "@/components/banner";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Cross } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { GrTechnology } from "react-icons/gr";
import { RiCrossFill } from "react-icons/ri";
import { TbShieldCheckFilled } from "react-icons/tb";
const ListItem = forwardRef<
  ElementRef<"a">,
  ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
export default function Home() {
  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-8 px-4">
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center w-full">
          <div className="w-24 h-10 object-cover relative">
            <Image
              src={"/assets/logo.svg"}
              layout="fill"
              alt="logo" />
          </div>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Sobre nosotros</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components built with Radix UI and
                            Tailwind CSS.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem href="/docs/primitives/typography" title="Typography">
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Que hacemos</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Comunidad</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/proyectos" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Proyectos
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/recursos" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Recursos
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
          <Button asChild>
            <Link href="/donacion" className="bg-[linear-gradient(99.75deg,#ED1A3C_2.49%,#FFFFFF_305.73%)] white">Donar</Link>
          </Button>
        </div>
        <Banner />

        <div className="grid grid-cols-2 items-center">
          <div className="place-self-start">
            <h2 className="bg-clip-text text-transparent bg-[linear-gradient(99.75deg,_#ED1A3C_2.49%,_#FFFFFF_305.73%)] w-fit">
              {`// Sobre GNIT`}
            </h2>
            <div>
              <h3 className="text-[3.125rem] leading-[3.8rem] font-bold pt-2">
                Comunidad cristiana de tecnología enfocada en el Evangelio
              </h3>

              <div className="pt-4 text-xl text-[#8E8E8E]">
                El objetivo de GNIT es explorar como la tecnología puede ser un papel fundamental en el servicio de la iglesia. Apoyamos a los desarrolladores cristianos a conocer mejor a Dios, y los guiamos para que sirvan a Dios atreves de la tecnología. Nos enfocamos en construir comunidades sólidas y glorificar a Jesucristo con el cumplimiento de la Gran Comisión a través de la tecnología.</div>
            </div>
            <div className="flex gap-x-20 pt-8 pb-10">
              <div className="flex flex-col gap-y-2">
                <RiCrossFill color="red" className="h-8 w-8"/>
                <p className="border-b border-black text-xl">Evangelio</p>
                <p className="text-[#8E8E8E]">Nos inspiramos en la historia de Jesús. </p>
              </div>
              <div className="flex flex-col gap-y-2">          
                <TbShieldCheckFilled color="red" className="h-8 w-8"/>
                <p className="border-b border-black text-xl">Tecnologias de la informacion</p>
                <p className="text-[#8E8E8E]">Nos inspiramos en la historia de Jesús. </p>
              </div>
            </div>
            <Button asChild>
            <Link href="/ver-mas" className="
            bg-[linear-gradient(99.75deg,#ED1A3C_2.49%,#FFFFFF_305.73%)] white">Ver mas</Link>
          </Button>
          </div>
          <div>
            <div className="object-cover h-[47rem] w-full relative">
              <Image src="/assets/imagenes.svg" layout="fill" alt="imagenes" />
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
