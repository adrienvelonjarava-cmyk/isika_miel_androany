import { ProductsType } from "@/types";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Link from "next/link";
import Filter from "./Filter";

// TEMPORARY
const products: ProductsType = [
  {
    id: 1,
    name: "Miel de Litchi",
    shortDescription:
      "Doux, fruité et parfumé, avec des notes d'abricot.",
    description:
      "Goût plus complexe, doux et nuancé, reflétant la diversité florale de la région.",
    price: 25000,
    sizes: ["Bocal", "Bouteille"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/litchi_qrcode.png",
      purple: "/products/litchi_qrcode.png",
      green: "/products/litchi_qrcode.png",
    },
  },
  {
    id: 2,
    name: "Miel de niaouli",
    shortDescription:
      "Réputé pour ses bienfaits apaisants pour les voies respiratoires, avec des arômes boisés.",
    description:
      "Goût très prononcé et caractéristique de la fleur d'origine.",
    price: 25000,
    sizes: ["Bocal", "Bouteille"],
    colors: ["gray", "green"],
    images: { gray: "/products/niaouli_qrcode.png", green: "/products/niaouli_qrcode.png" },
  },
  {
    id: 3,
    name: "Miel de Baobab",
    shortDescription:
      "Un miel intense et rare aux saveurs légèrement caramélisées.",
    description:
      "Un miel intense et rare aux saveurs légèrement caramélisées.",
    price: 25000,
    sizes: ["Bocal", "Bouteille"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/baobab_qrcode.png",
      blue: "/products/baobab_qrcode.png",
      black: "/products/baobab_qrcode.png",
    },
  },
  {
    id: 4,
    name: "Miel de cactus",
    shortDescription:
      "Récolté dans les régions arides, il a une couleur ambrée et des notes florales, fruitées et une pointe d'amertume.",
    description:
      "Récolté dans les régions arides, il a une couleur ambrée et des notes florales, fruitées et une pointe d'amertume.",
    price: 25000,
    sizes: ["Bocal", "Bouteille"],
    colors: ["white", "pink"],
    images: { white: "/products/cactus_qrcode.png", pink: "/products/cactus_qrcode.png" },
  },
  {
    id: 5,
    name: "Miel de mokarana",
    shortDescription:
      "Floral et légèrement boisé, avec un goût prononcé et une texture crémeuse.",
    description:
      "Floral et légèrement boisé, avec un goût prononcé et une texture crémeuse.Miel d'eucalyptus : Aux notes boisées et légèrement mentholées.",
    price: 25000,
    sizes: ["Bocal", "Bouteille"],
    colors: ["red", "orange", "black"],
    images: {
      red: "/products/mokarana_qrcode.png",
      orange: "/products/mokarana_qrcode.png",
      black: "/products/mokarana_qrcode.png",
    },
  },
  {
    id: 6,
    name: "Miel d'eucalyptus",
    shortDescription:
      "Aux notes boisées et légèrement mentholées.Un miel rare et très sucré, dont les apiculteurs doivent naviguer pour le récolter dans les palétuviers.",
    description:
      "Aux notes boisées et légèrement mentholées.",
    price: 25000,
    sizes: ["Bocal", "Bouteille"],
    colors: ["gray", "white"],
    images: { gray: "/products/eucalyptus_qrcode.png", white: "/products/eucalytus_qrcode.png" },
  },
  {
    id: 7,
    name: "Miel de mangrove",
    shortDescription:
      "Un miel rare et très sucré, dont les apiculteurs doivent naviguer pour le récolter dans les palétuviers.Un miel intense et rare aux saveurs légèrement caramélisées.",
    description:
      "Un miel rare et très sucré, dont les apiculteurs doivent naviguer pour le récolter dans les palétuviers.",
    price: 25000,
    sizes: ["Bocal", "Bouteille"],
    colors: ["gray", "pink"],
    images: { gray: "/products/mangrove_qrcode.png", pink: "/products/mangrove_qrcode.png" },
  },
  {
    id: 8,
    name: "Miel mille fleurs",
    shortDescription:
      "Une explosion de saveurs.Un miel rare et très sucré, dont les apiculteurs doivent naviguer pour le récolter dans les palétuviers.",
    description:
      "Une explosion de saveurs dont les goûts varient selon les saisons et les zones de récolte.",
    price: 25000,
    sizes: ["Bocal", "Bouteille"],
    colors: ["blue", "green"],
    images: { blue: "/products/millefleur_qrcode.png", green: "/products/millefleur_qrcode.png" },
  },
];

const ProductList = ({ category,params }: { category: string, params:"homepage" | "products" }) => (
    <div className="w-full">
        <Categories />
        {params === "products" && <Filter />}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
        <Link
            href={category ? `/products/?category=${category}` : "/products"}
            className="flex justify-end mt-4 underline text-sm text-gray-500"
        >
            Voir tous les produits
        </Link>
    </div>
);

export default ProductList;
