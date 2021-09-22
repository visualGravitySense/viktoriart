<template>
    <div class="accordion">
        <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-1 class="accordion-button">
                    <span class="icon-box">
                        <i class="icon icofont-plus"></i>
                        <i class="icon icofont-minus"></i>
                    </span>
                  How can start teaching on Kangelane?
                </b-button>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion">
                <b-card-body>
                    <b-card-text>
                      That depends upon the task, but average decision accept time is 1-2 days.
                      The amount of slots is
                      unlimited, but to have many slots can break the focus.
                      And if you don't know how to start -
                      we have also support team.
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>
        <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-2 class="accordion-button">
                    <span class="icon-box">
                        <i class="icon icofont-plus"></i>
                        <i class="icon icofont-minus"></i>
                    </span>
                    How to get your services?
                </b-button>
            </b-card-header>
            <b-collapse id="accordion-2" visible accordion="my-accordion">
                <b-card-body>
                    <b-card-text>
                      First step is intro request. After that manager will add your class add, product or print to the base.
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>
        <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-3 class="accordion-button">
                    <span class="icon-box">
                        <i class="icon icofont-plus"></i>
                        <i class="icon icofont-minus"></i>
                    </span>
                  How can i payment your product?
                </b-button>
            </b-card-header>
            <b-collapse id="accordion-3" visible accordion="my-accordion">
                <b-card-body>
                    <b-card-text>
                      All services are invoiced from a legal entity and paid to a bank account.
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>
        <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-4 class="accordion-button">
                    <span class="icon-box">
                        <i class="icon icofont-plus"></i>
                        <i class="icon icofont-minus"></i>
                    </span>
                  Where are you located?
                </b-button>
            </b-card-header>
            <b-collapse id="accordion-4" visible accordion="my-accordion">
                <b-card-body>
                    <b-card-text>
                      We are a diverse team, but our headquarter is in Tallinn.
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>
    </div>
</template>
