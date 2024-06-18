const clsx = (...params) => {
    return String(params).replace(/,/g, ' ')
};

export default clsx;