import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER
});

const Subscribe = async (req, res) => {
    const {email} = req.body;

    if(!email) {
        return res.status(400).json({error: 'Email is required'});
    }

    try {
        const response = await mailchimp.lists.addListMember({
            id: process.env.MAILCHIMP_LIST_ID,
            email_address: email,
            status: 'subscribed'
        });

        return res.json(response);
    } catch (error) {
        return res.status(500).json({error: error.message || error.toString()});
    }
}

export default Subscribe;