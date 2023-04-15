interface PublicRoutesProps {
  children: JSX.Element;
}

const PublicRoutes = ({ children }: PublicRoutesProps) => {
  const isLogged: boolean = false;
  return isLogged ? <>Todo</> : children;
};

export default PublicRoutes;
