const Footer = () => {
  return (
    <footer className="bg-dusty-rose text-dark-red py-4 absolute bottom-0 w-full">
      <div className="container mx-auto flex justify-center items-center">
        <small>
          Developed by{' '}
          <a
            className="transition-all hover:font-bold hover:text-dark-red"
            href="https://github.com/gazamba"
            target="_blank"
          >
            Gabriel Azambuja
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;