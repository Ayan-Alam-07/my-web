const SignInOr = () => {
  return (
    <div
      className="mt-5 mb-5"
      style={{
        position: "relative",
        borderTop: "2px dashed #d6d5d5",
        zIndex: "100",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <p
        className="mb-0"
        style={{
          margin: "0px",
          display: "inline-block",
          textDecoration: "none",
          position: "absolute",
          top: "-16px",
          //   left: "48%",
          zIndex: "1000",
          background: "#fff",
          color: "#000",
          border: "none",
          borderRadius: "8px",
          padding: "1px 11px",
        }}
      >
        OR
      </p>
    </div>
  );
};
export default SignInOr;
