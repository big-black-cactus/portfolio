'use client';
import { motion, Variants } from 'framer-motion';
import React from 'react';

type PresetType = 'blur' | 'shake' | 'scale' | 'fade' | 'slide';

type TextEffectBaseProps = {
  children: string;
  per?: 'word' | 'char';
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  className?: string;
  preset?: PresetType;
};

type TextEffectProps<As extends keyof typeof motion = 'p'> =
  TextEffectBaseProps &
  Omit<
    React.ComponentProps<typeof motion[As]>,
    'children' | 'initial' | 'animate' | 'variants' | 'className'
  > & {
    as?: As;
  };

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.01 } },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const presetVariants: Record<
  PresetType,
  { container: Variants; item: Variants }
> = {
  blur: {
    container: defaultContainerVariants,
    item: { hidden: { opacity: 0, filter: 'blur(12px)' }, visible: { opacity: 1, filter: 'blur(0px)' } },
  },
  shake: {
    container: defaultContainerVariants,
    item: { hidden: { x: 0 }, visible: { x: [-5, 5, -5, 5, 0], transition: { duration: 0.5 } } },
  },
  scale: {
    container: defaultContainerVariants,
    item: { hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1 } },
  },
  fade: {
    container: defaultContainerVariants,
    item: defaultItemVariants,
  },
  slide: {
    container: defaultContainerVariants,
    item: { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } },
  },
};

const AnimationComponent: React.FC<{
  word: string;
  variants: Variants;
  per: 'word' | 'char';
}> = React.memo(({ word, variants, per }) => {
  if (per === 'word') {
    return (
      <motion.span aria-hidden="true" variants={variants} className="inline-block whitespace-pre">
        {word}
      </motion.span>
    );
  }
  return (
    <span className="inline-block whitespace-pre">
      {word.split('').map((char, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          variants={variants}
          className="inline-block whitespace-pre"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
});
AnimationComponent.displayName = 'AnimationComponent';

export function TextEffect<As extends keyof typeof motion = 'p'>(props: TextEffectProps<As>) {
  const {
    children,
    per = 'word',
    as: asProp,       // no default here
    variants,
    className,
    preset,
    ...motionProps
  } = props;

  // fallback to 'p' at runtime, cast to As
  const actualAs = (asProp ?? 'p') as As;

  const words = children.split(/(\S+)/);
  const selected = preset
    ? presetVariants[preset]
    : { container: defaultContainerVariants, item: defaultItemVariants };
  const containerVariants = variants?.container ?? selected.container;
  const itemVariants = variants?.item ?? selected.item;

  const MotionTag = motion[actualAs] as React.ComponentType<React.ComponentProps<typeof motion[As]>>;

  return (
    <MotionTag
      initial="hidden"
      animate="visible"
      aria-label={children}
      variants={containerVariants}
      className={className}
      {...(motionProps as React.ComponentProps<typeof motion[As]>)}
    >
      {words.map((word, idx) => (
        <AnimationComponent key={idx} word={word} variants={itemVariants} per={per} />
      ))}
    </MotionTag>
  );
}
