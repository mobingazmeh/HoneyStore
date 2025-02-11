// useUserStore.ts
import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import { getUser, updateUser } from '@/utils/requests'; // Import the API functions
import { UserResponse, UserStore } from '@/types/userStoreTypes'; // Import the types

const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set) => ({
        token: null, // Initial value for token
        user: null,  // Initial value for user

        // Function to set user data in store
        setUser: (userData: UserResponse | null) => set({ user: userData }),

        // Function to set token in store
        setToken: (newToken: string | null) => set({ token: newToken }),

        // Function to clear user data and token from store
        clearUser: () => set({ user: null, token: null }),

        // Function to get user data from API
        getUserFromApi: async () => {
          try {
            const userData = await getUser(); // Fetch data from API
            set({ user: userData }); // Store user data
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        },

        // Function to update user data in API
        updateUserInApi: async (userData: any) => {
          try {
            const updatedUser = await updateUser(userData); // Update data via API
            set({ user: updatedUser }); // Store updated user data
          } catch (error) {
            console.error('Error updating user data:', error);
          }
        },
      }),
      {
        name: 'user-store', // Store name for sessionStorage
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

export default useUserStore;
