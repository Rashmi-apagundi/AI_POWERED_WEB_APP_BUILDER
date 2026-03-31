import jwt from 'jsonwebtoken';

export const generateToken = (User) => {
    const payload = {
        id: User._id,
        name: User.name,
        email: User.email
    };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

}

export const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        throw new Error("Invalid token");
    }
};