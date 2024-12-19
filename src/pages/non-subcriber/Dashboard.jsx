import React from "react";

const Dashboard = () => {
  return (
    <div className="container-fluid p-0">
      <div className="dashboard-main-content p-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div class="card flex-fill">
								<div class="card-body py-4">
									<div class="d-flex align-items-start">
										<div class="flex-grow-1">
											<h3 class="mb-2">$ 24.300</h3>
											<p class="mb-2">Total Earnings</p>
											<div class="mb-0">
												<span class="badge badge-subtle-success me-2"> +5.35% </span>
												<span class="text-muted">Since last week</span>
											</div>
										</div>
										<div class="d-inline-block ms-3">
											<div class="stat">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="dollar-sign" class="lucide lucide-dollar-sign align-middle text-success"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
											</div>
										</div>
									</div>
								</div>
							</div>
            </div>

            <div className="col-md-6">
              <div class="card flex-fill">
								<div class="card-body py-4">
									<div class="d-flex align-items-start">
										<div class="flex-grow-1">
											<h3 class="mb-2">$ 24.300</h3>
											<p class="mb-2">Total Earnings</p>
											<div class="mb-0">
												<span class="badge badge-subtle-success me-2"> +5.35% </span>
												<span class="text-muted">Since last week</span>
											</div>
										</div>
										<div class="d-inline-block ms-3">
											<div class="stat">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="dollar-sign" class="lucide lucide-dollar-sign align-middle text-success"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
											</div>
										</div>
									</div>
								</div>
							</div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h2>Latest Projects</h2>
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Heading</th>
                          <th scope="col">Heading</th>
                          <th scope="col">Heading</th>
                          <th scope="col">Heading</th>
                          <th scope="col">Heading</th>
                          <th scope="col">Heading</th>
                          <th scope="col">Heading</th>
                          <th scope="col">Heading</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Cell</td>
                          <td>Cell</td>
                          <td>Cell</td>
                          <td>Cell</td>
                          <td>Cell</td>
                          <td>Cell</td>
                          <td>Cell</td>
                          <td>Cell</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Cell</td>
                          <td>Cell</td>
                          <td>Cell</td>
                          <td>Cell</td>
                          <td>Cell</td>
                          <td>Cell</td>
                          <td>Cell</td>
                          <td>Cell</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Cell</td>
                          <td>Cell</td>
                          <td>Cell</td>
                          <td>Cell</td>
                          <td>Cell</td>
                          <td>Cell</td>
                          <td>Cell</td>
                          <td>Cell</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
