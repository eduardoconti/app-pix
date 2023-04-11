import { api } from '@/services/api/api';
import jwt from 'jwt-decode';
type SignInRequestData = {
  email: string;
  password: string;
};

export async function signInRequest({ email, password }: SignInRequestData) {
  try {
    const {
      data: { access_token },
    } = await api.post(`/login`, {
      email,
      password,
    });

    const { userName, userId } = jwt<{ userName: string; userId: string }>(
      access_token,
    );
    return {
      user: {
        token: access_token,
        userName: userName,
        userId: userId,
      },
    };
  } catch (error: any) {
    console.log(error.response?.data);
    throw new Error('Api error');
  } finally {
  }
}

// export async function recoverUserInformation() {
//   await delay();

//   return {
//     user: {
//       userName: "Eduardo",
//       userId: "es.eduardoconti@gmail.com",
//     },
//   };
// }
