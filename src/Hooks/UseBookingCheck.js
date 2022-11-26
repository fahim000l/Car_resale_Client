import { useQuery } from '@tanstack/react-query';

const UseBookingCheck = (productId) => {

    const { data: isOrdered, refetch: bookingCheckRefetch, isLoading: bookingCheckLoading } = useQuery({
        queryKey: ['products', productId],
        queryFn: () => fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
    });
    return { isOrdered, bookingCheckRefetch, bookingCheckLoading }

};

export default UseBookingCheck;