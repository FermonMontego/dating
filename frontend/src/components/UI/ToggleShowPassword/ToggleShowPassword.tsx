import React, {
  FC,
  SVGProps,
  SyntheticEvent,
  useCallback,
  useState,
} from 'react';
import PasswordLockIcon from 'src/components/Icons/PasswordLockIcon';

import classNames from 'classnames';

type Props = {
  onClick?: (state: boolean) => void;
  className?: string;
};

const stylesIsShow: SVGProps<SVGSVGElement> = {
  fill: '#fff',
  stroke: '#000',
};

const ToggleShowPassword: FC<Props> = ({ onClick, className }) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const handleClick = useCallback((event: SyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setIsShow(prevState => !prevState);
    onClick && onClick(isShow);
  }, []);

  return (
    <PasswordLockIcon
      className={classNames(className)}
      onClick={handleClick}
      {...(isShow && stylesIsShow)}
    />
  );
};

export default ToggleShowPassword;
