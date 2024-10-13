import React, {
  Dispatch,
  FC,
  SetStateAction,
  SVGProps,
  SyntheticEvent,
  useCallback,
} from 'react';
import PasswordLockIcon from 'src/components/Icons/PasswordLockIcon';

import classNames from 'classnames';

type Props = {
  setState?: Dispatch<SetStateAction<boolean>>;
  className?: string;
  isShow: boolean;
};

const stylesIsShow: SVGProps<SVGSVGElement> = {
  fill: '#fff',
  stroke: '#000',
};

const ToggleShowPassword: FC<Props> = ({ setState, className, isShow }) => {
  const handleClick = useCallback(
    (event: SyntheticEvent) => {
      event.stopPropagation();
      event.preventDefault();

      setState && setState(prevState => !prevState);
    },
    [setState],
  );

  return (
    <PasswordLockIcon
      className={classNames(className)}
      onClick={handleClick}
      {...(isShow && stylesIsShow)}
    />
  );
};

export default ToggleShowPassword;
