import React, { FC, SVGProps, useCallback, useState } from 'react';
import PasswordLockIcon from 'src/components/Icons/PasswordLockIcon';

type Props = {
  onClick?: (state: boolean) => void;
};

const stylesIsShow: SVGProps<SVGSVGElement> = {
  fill: '#fff',
  stroke: '#000',
};

const ToggleShowPassword: FC<Props> = ({ onClick }) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const handleClick = useCallback(() => {
    setIsShow(prevState => !prevState);
    onClick && onClick(isShow);
  }, []);

  return (
    <PasswordLockIcon onClick={handleClick} {...(isShow && stylesIsShow)} />
  );
};

export default ToggleShowPassword;
