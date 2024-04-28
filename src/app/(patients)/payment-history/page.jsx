import React from 'react';
import { authOptions } from '@/app/api/auth/[...nextauth]/AuthOptions';
import PaymentHistoryTable from '@/components/Ui/Table/PaymentHistoryTable';
import { getServerSession } from 'next-auth';

const PaymentHistory = async() => {
    const session = await getServerSession(authOptions);
    return (
        <div>
            <PaymentHistoryTable session={session}/>
        </div>
    );
};

export default PaymentHistory;