export interface Passenger {
    id: string;
    first_name: string;
    last_name: string;
    passenger_mail: string;
    gender: string;
    password: string;
    verification_code: string;
    verified: boolean;
    birthday: string;
    contact_no: string;
    feedback_count: number;
    passenger_score: number;
    blocked: boolean;
    created_at: Date;
}