export const websiteEnquiryFieldsData = [


    {
        id: 'firstname', label: 'First name', type: 'text', required: true, autoComplete: "given-name", validation: value => {
            if (typeof value === 'string') {
                return value.trim().length > 2;
            }
            return false;
        },
        errorMessage: 'First name should be at least 3 characters long'
    },
    {
        id: 'email', label: 'Email address', type: 'email', required: true, autoComplete: "email", validation: value => /\S+@\S+\.\S+/.test(value),
        errorMessage: 'Enter a valid email address'
    },
    {
        id: 'phone', label: 'Phone', type: 'text', required: false, autoComplete: "phone", validation: value => /\S+@\S+\.\S+/.test(value),
        errorMessage: 'Enter a valid phone number'
    },
    {
        id: 'services',
        label: 'Services Needed',
        type: 'select', // or 'radio' for single selection
        multiple: true,
        options: [
            { value: 'Hedge Trimming', label: 'Hedge Trimming' },
            { value: 'Tree Pruning', label: 'Tree Pruning' },
            { value: 'Tree Removal', label: 'Tree Removal' },
            { value: 'Stump Grinding', label: 'Stump Grinding' },
            { value: 'Firewood & Mulch For Sale', label: 'Firewood & Mulch For Sale' },
            { value: 'Storm Damaged Trees & Emergency Work', label: 'Storm Damaged Trees & Emergency Work' },
            { value: 'Land Clearing', label: 'Land Clearing' },
            { value: 'Tree Health Monitoring & Assessments', label: 'Tree Health Monitoring & Assessments' },
            { value: 'Planting & Gardening', label: 'Planting & Gardening' },
            { value: 'Chipping & Wood Splitting', label: 'Chipping & Wood Splitting' },
        ],
        validation: value => {
            if (typeof value === 'string') {
                return value.trim().length > 2;
            }
            return false;
        },
        errorMessage: 'Please select at least one requirement'
    },
    {
        id: 'message', label: 'Message', type: 'textarea', required: false, autoComplete: "phone", validation: value => /\S+@\S+\.\S+/.test(value),
        errorMessage: 'Enter a valid phone number'
    },



]