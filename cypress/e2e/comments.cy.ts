describe("Comments App", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("http://localhost:3000");
  });

  // Basic app tests
  it("should load the app", () => {
    cy.get(".App").should("exist");
  });

  // Comment functionality tests
  it("should add a new comment", () => {
    const commentText = "This is a test comment";

    // Add comment
    cy.get("textarea").type(commentText);
    cy.get('form button[type="submit"]').click();

    // Verify comment exists
    cy.get(".comment-content p").should("contain", commentText);
  });

  it("should delete a comment", () => {
    const commentText = "Comment to be deleted";

    // Add comment
    cy.get("textarea").type(commentText);
    cy.get('form button[type="submit"]').click();

    // Delete comment
    cy.get(".delete-button").click();

    // Verify comment is gone
    cy.get(".comment-content").should("not.exist");
  });

  it("should add a reply to a comment", () => {
    const parentComment = "Parent comment";
    const replyText = "This is a reply comment";

    // Add parent comment
    cy.get("textarea").type(parentComment);
    cy.get('form button[type="submit"]').click();

    // Add reply

    for (let i = 1; i <= 1000; i++) {
      cy.get(".reply-button").each(($button) => {
        cy.wrap($button).click(); // Click each reply button
        cy.get(".reply-form textarea").type(`${replyText} ${i}`); // Add unique text for each reply
        cy.get('.reply-form button[type="submit"]').click();
      });
    }

    // Verify reply exists
    cy.get(".comment-item").should("have.length", 1001);
    cy.get(".comment-item")
      .last()
      .should("contain", replyText + " 1000");
  });
});
