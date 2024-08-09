import React from "react";
export const Container = () => {
    return (
        <>
        <div className="mt-2"/>
        <div class="container fluid mx-auto border" style={{ maxWidth: 1000 , backgroundColor: '#c8c8c8'}}>
            <h1 class="display-5 fw-bold">A warm welcome!</h1>
            <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
            <button class="btn btn-primary btn-lg" type="button">Example button</button>
            <div className="mt-2"/>
        </div>
            <div className="mt-2" />
            <div className="card-group mx-auto" style={{ maxWidth: 1000 }}>
                <div className="card">
                    <img src="https://via.placeholder.com/500x320" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title 1</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img src="https://via.placeholder.com/500x320" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title 2</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img src="https://via.placeholder.com/500x320" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title 3</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img src="https://via.placeholder.com/500x320" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title 4</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
            <div className="mt-2"/>
            <footer class="bg-dark text-center text-white py-3">
  <small>Copyright ©, your website 2019</small>
</footer>
            </>
    );
};
