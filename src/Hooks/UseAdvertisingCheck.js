import { useQuery } from '@tanstack/react-query';

const UseAdvertisingCheck = (productId) => {

    const { data: isAdvertised, refetch: advertisingRefetch } = useQuery({
        queryKey: ['advertisingProducts', productId],
        queryFn: () => fetch(`http://localhost:5000/advertisingProducts?productId=${productId}`)
            .then(res => res.json())
    });

    return [isAdvertised, advertisingRefetch]
};

export default UseAdvertisingCheck;