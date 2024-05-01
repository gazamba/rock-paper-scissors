import { ComponentProps } from 'react';
import { GameOption } from '../types/GameOption';
import { HandRock } from './icons/HandRock';
import { HandPaper } from './icons/HandPaper';
import { HandScissors } from './icons/HandScissors';

type OptionProps = {
  value: GameOption;
  onPlayerChoice?: (value: GameOption) => void;
  disabled?: boolean;
} & ComponentProps<'div'>;

export function Option({
  value,
  onPlayerChoice,
  disabled,
  ...props
}: OptionProps) {
  function handleClick() {
    onPlayerChoice?.(value);
  }
  return (
    <div className="relative" {...props}>
      <span
        className={`absolute -top-2.5 left-0 -z-10 w-0 origin-center scale-0 transform rounded-full bg-dark-red transition-all duration-100 has-[:checked]:h-24 has-[:checked]:w-24 has-[:checked]:scale-100`}
      >
        <input type="checkbox" id={value} className="hidden" />
      </span>

      <label
        className={`cursor-pointer ${disabled && 'cursor-not-allowed'}`}
        onClick={handleClick}
        htmlFor={value}
      >
        {value === 'rock' && <HandRock />}
        {value === 'paper' && <HandPaper />}
        {value === 'scissors' && <HandScissors />}
      </label>
    </div>
  );
}
