using Microsoft.AspNetCore.Mvc;
using STRF.Backend.Models;

[ApiController]
[Route("api/[controller]")]
public class SignInFormController : ControllerBase
{
    private static List<Account> _accounts = new List<Account>
    {
        new Account { Name = "Shahriar Shirani", Password = "1234" }
    };

    [HttpGet]
    public IActionResult GetAll() => Ok(_accounts);

    [HttpGet("{name}")]
    public IActionResult GetByName(string name)
    {
        var account = _accounts.FirstOrDefault(a => a.Name == name);
        if (account == null) return NotFound();
        return Ok(account);
    }

    [HttpPost]
    public IActionResult Create(Account account)
    {
        if (account == null) return BadRequest();
        if (_accounts.Any(a => a.Name == account.Name))
            return Conflict("Account with this name already exists.");

        _accounts.Add(account);
        return CreatedAtAction(nameof(GetByName), new { name = account.Name, pass = account.Password }, account);
    }
}
