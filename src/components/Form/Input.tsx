type Props = {
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
};

export function Input({ type = 'text', placeholder }: Props) {
  return (
    <input
      className="w-full p-3 mb-2 bg-white border rounded-md border-gray-100 placeholder:text-gray-500 placeholder:text-sm outline-none active:ring-2 focus:ring-2 ring-sky-500"
      type={type}
      placeholder={placeholder}
    />
  );
}
