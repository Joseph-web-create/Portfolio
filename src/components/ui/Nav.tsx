function Nav() {
  return (
    <div className="fixed z-10 top-0 py-6 px-8 bg-black/50 flex items-center justify-between container border border-[gray] mt-16 rounded-full ">
      <p className="text-white">Josph.create</p>

      <div className="flex items-center gap-4 text-white">
        <p>Contact</p>
        <p>Projects</p>
      </div>
    </div>
  );
}

export default Nav;
