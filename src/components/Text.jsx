import React from "react";
import { cva } from "class-variance-authority";

/** @typedef {import("class-variance-authority").VariantProps<typeof textVariants>} TextVariants */

export const textVariants = cva("font-sans", {
  variants: {
    variant: {
      "body-md": "text-base leading-6 font-normal text-primary",
      "body-md-secundary": "text-base leading-6 font-normal text-secundary",
      "heading-lg": "text-lg leading-7 font-bold text-primary",
      "subHeading-sm": "text-sm leading-5 font-normal text-secundary",
      inherit: "text-inherit",
    },
  },
  defaultVariants: { variant: "body-md" },
});

/**
 * @param {Object} props
 * @param {React.ElementType} [props.as] - O elemento HTML a ser renderizado (ex: 'h1', 'p', 'span')
 * @param {TextVariants["variant"]} [props.variant] - A variante de estilo definida no CVA
 * @param {string} [props.className] - Classes adicionais do Tailwind
 * @param {React.ReactNode} props.children - Conteúdo do texto
 */
export default function Text({
  as: Component = "span",
  variant,
  className,
  children,
  ...props
}) {
  return (
    <Component className={textVariants({ variant, className })} {...props}>
      {children}
    </Component>
  );
}
