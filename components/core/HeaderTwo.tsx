export default function HeaderTwo({ children, ...props }: { children: React.ReactNode }) {
  return <h1 className="font-bold text-xl p-2" {...props}>{children}</h1>;
}
