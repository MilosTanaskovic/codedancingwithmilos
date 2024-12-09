
type HeroBoxProps = {
  children?: React.ReactNode;
};

export default function HeroBox({ children }: HeroBoxProps) {
  return (
    <section>
      <div className="max-w-screen-md 2xl:max-w-screen-lg">
        <div className="pt-8 pb-10">
          {children}
        </div>
      </div>
    </section>
  );
}
