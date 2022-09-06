import classNames from 'classnames';

type ButtonVariant = 'primary' | 'link';

type Props = {
  variant?: ButtonVariant;
  children: React.ReactNode;
};

export function Button({ variant = 'primary', children }: Props) {
  let buttonClasses =
    'px-6 py-3 bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white font-bold shadow-lg hover:shadow-none';
  if (variant === 'link') {
    buttonClasses =
      'px-3 py-1 bg-transparent text-sky-500 hover:text-sky-600 active:text-sky-700 underline';
  }

  return (
    <button
      className={classNames(
        'transition-all duration-75 rounded-md',
        buttonClasses
      )}
    >
      {children}
    </button>
  );
}
