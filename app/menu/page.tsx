import Image from "next/image";
import mainMenu from "../../assets/menu/MAIN MENU.jpg";
import lunchMenu from "../../assets/menu/LUNCH MENU.png";
import drinksMenu from "../../assets/menu/DRINKS MENU.jpg";

const menus = [
  { title: "Main Menu", image: mainMenu, pdf: "/menu/main-menu.pdf" },
  { title: "Lunch Menu", image: lunchMenu, pdf: "/menu/lunch-menu.pdf" },
  { title: "Drinks Menu", image: drinksMenu, pdf: "/menu/drinks-menu.pdf" },
];

export default function MenuPage() {
  return (
    <section className="min-h-screen bg-[#0d100e] px-6 pb-24 pt-40 lg:px-10">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-14 text-center">
          <p className="eyebrow mb-4 text-gold">Discover Our Kitchen</p>
          <h1 className="font-display text-5xl text-cream sm:text-6xl">Our Menus</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:max-w-5xl lg:mx-auto">
          {menus.map((menu) => (
            <article key={menu.title} className="text-center">
              <a href={menu.pdf} target="_blank" rel="noopener noreferrer" className="group relative block overflow-hidden rounded-[12px] border border-white/10 bg-black aspect-[4/3]">
                <Image src={menu.image} alt={menu.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-50" priority={menu.title === "Main Menu"} />
                <span className="absolute inset-0 grid place-items-center opacity-100 transition duration-300 sm:opacity-0 sm:group-hover:opacity-100">
                  <span className="bg-black px-8 py-5 text-xs font-bold tracking-[0.22em] text-gold uppercase">View Menu</span>
                </span>
              </a>
              <h2 className="mt-6 font-display text-2xl uppercase tracking-[0.08em] text-gold">{menu.title}</h2>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
