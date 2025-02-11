// useOptionsStore.ts
import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import { fetchOptions } from '@/utils/requests'; // وارد کردن تابع درخواست
import { OptionsStoreState } from '@/types/optionsStoreTypes';

const useOptionsStore = create<OptionsStoreState>()(
  devtools(
    persist(
      (set) => ({
        options: {
          information_site: {
            sitename: null,
            short_description: null,
            description: null,
            keyword: null,
            logo: null,
            logo2: null,
            icon_logo: null,
            type_site: null,
            is_active: null,
          },
          social: {
            instagram: null,
            whatsApp: null,
            telegram: null,
          },
          business_information: {
            phone_support: null,
            email_support: null,
            video_about_us: null,
            address: null,
            address_2: null,
          },
        },
        isLoading: false,
        isError: false,
        getOptionsFromApi: async () => {
          set({ isLoading: true, isError: false });

          try {
            const data = await fetchOptions();
            set({ options: data.results, isLoading: false });
          } catch (error) {
            set({ isError: true, isLoading: false });
            console.error('Error fetching options:', error);
          }
        },
      }),
      {
        name: 'options-store',
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({
          options: state.options,
          isLoading: state.isLoading,
          isError: state.isError,
        }),
      }
    )
  )
);

export default useOptionsStore;
