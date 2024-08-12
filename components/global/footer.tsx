import Image from "next/image";
import Link from "next/link";
import { Facebook, Youtube, LinkedinIcon, ChevronRight, Linkedin } from "lucide-react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="bg-background">
                <div className="container pb-14 pt-20">
                    <div className="flex flex-wrap gap-8 lg:flex-nowrap">
                        <div className="flex flex-col">
                            <Link href="/">
                                <Image src={"/assets/logo.svg"} alt="Logo" width={160} height={160} />
                            </Link>
                            <div className="basis-full lg:basis-1/2">
                                <ul className="flex items-center justify-center lg:justify-end">
                                    <li className="ml-3 w-8">
                                        <Link href="#" target="_blank">
                                            <FaFacebook size={30} className="w-6 h-6" />
                                        </Link>
                                    </li>
                                    <li className="ml-3 w-8">
                                        <Link href="#" target="_blank">
                                            <BsTwitter className="w-6 h-6" />
                                        </Link>
                                    </li>
                                    <li className="ml-3 w-8">
                                        <Link href="#" target="_blank">
                                            <Linkedin size={30} className="w-6 h-6" />
                                        </Link>
                                    </li>
                                    <li className="ml-3 w-8">
                                        <Link href="#" target="_blank">
                                            <Youtube size={30} className="w-6 h-6" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <ul className="flex justify-between border-b-2 border-blue-500 pb-2">
                            <li className="px-4">
                                <h3 className="font-bold">Bienvenidos</h3>
                                <ul className="mt-2 space-y-1">
                                    <li>Estado de la misión</li>
                                    <li>Liderazgo</li>
                                    <li>Historia</li>
                                </ul>
                            </li>
                            <li className="px-4">
                                <h3 className="font-bold">Socios</h3>
                                <ul className="mt-2 space-y-1">
                                    <li>Declaración de Fé</li>
                                    <li>Post a freelance project</li>
                                    <li>Que hacemos</li>
                                </ul>
                            </li>
                            <li className="px-4">
                                <h3 className="font-bold">Proyectos</h3>
                                <ul className="mt-2 space-y-1">
                                    <li>Red</li>
                                    <li>Noticias</li>
                                    <li>Eventos</li>
                                </ul>
                            </li>
                            <li className="px-4">
                                <h3 className="font-bold">Aprendiendo</h3>
                                <ul className="mt-2 space-y-1">
                                    <li>Recursos</li>
                                    <li>Donación</li>
                                    <li>Contáctanos</li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className="bg-primary-main py-7">
                <div className="px-32">
                    <div className="flex flex-wrap items-center lg:flex-nowrap">
                        <div className="basis-full lg:basis-1/2">
                            <p className="mb-4 text-center text-sm leading-6  lg:mb-0 lg:text-left">
                                &copy; Copyrights GNIT - colombia Todos los derechos reservados.
                            </p>
                        </div>
                        <p className="basis-full lg:basis-1/2 text-right">
                        84 misineros
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
