import { connectToDB } from '../../../../utils/database';
import UserModel from '../../../../models/user';

export const PUT = async (req) => {
    const { id, firstName, lastName, email, role } = await req.json();
    try {
        await connectToDB();

        const updatedUser = await UserModel.findByIdAndUpdate(
            id,
            { firstName, lastName, email, role, updatedAt: new Date() },
            { new: true }
        );

        if (!updatedUser) {
            return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 });
        }

        return new Response(JSON.stringify({ message: 'User updated successfully', user: updatedUser }), { status: 200 });
    } catch (error) {
        console.log(error.message);
        return new Response(JSON.stringify({ message: 'Failed to update user' }), { status: 500 });
    }
};

export const DELETE = async (req) => {
    const { id } = await req.json();
    try {
        await connectToDB();

        const deletedUser = await UserModel.findByIdAndDelete(id);

        if (!deletedUser) {
            return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 });
        }

        return new Response(JSON.stringify({ message: 'User deleted successfully' }), { status: 200 });
    } catch (error) {
        console.log(error.message);
        return new Response(JSON.stringify({ message: 'Failed to delete user' }), { status: 500 });
    }
};