import Header from '../components/Header/Header';

type HeaderAndFooterPropType = {
  children: JSX.Element;
};

const HeaderAndFooter = ({ children }: HeaderAndFooterPropType) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default HeaderAndFooter;
