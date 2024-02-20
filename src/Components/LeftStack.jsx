import React from 'react'
import { Stack } from 'react-bootstrap'

function LeftStack() {
    return (
        <div>
            <Stack gap={3}>
                <div className="p-2 bg-primary border text-light"><h6><img src="https://i.postimg.cc/GmxTYxTt/rainfall-in-kerala.png" alt="" height="50px" />കേരളത്തിൽ അതിശക്തമായ</h6></div>
                <div className="p-2 bg-primary border text-light"><h6><img src="https://i.postimg.cc/GmxTYxTt/rainfall-in-kerala.png" alt="" height="50px" />ചെന്നൈയിലെ വെള്ളപ്പൊക്കത്തില്‍</h6></div>
                <div className="p-2 bg-primary border text-light"><h6><img src="https://i.postimg.cc/GmxTYxTt/rainfall-in-kerala.png" alt="" height="50px" />ചുഴലിക്കാറ്റ് ആന്ധ്ര തീരത്തേക്ക്</h6></div>
            </Stack>
        </div>
    )
}

export default LeftStack