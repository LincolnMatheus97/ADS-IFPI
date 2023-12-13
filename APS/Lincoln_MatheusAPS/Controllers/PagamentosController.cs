#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Lincoln_MatheusAPS.Models;

namespace Lincoln_MatheusAPS.Controllers
{
    public class PagamentosController : Controller
    {
        private readonly MyDbContext _context;

        public PagamentosController(MyDbContext context)
        {
            _context = context;
        }

        // GET: Pagamentos
        public async Task<IActionResult> Index()
        {
            if(TempData["SuccessMessage"] !=null)
            {
                ViewBag.SuccessMessage = TempData["SuccessMessage"];
            }
            else if(ViewData["ErrorMessage"] !=null)
            {
                ViewBag.ErrorMessage = TempData["ErrorMessage"];
            }

            var myDbContext = _context.Pagamento.Include(p => p.NotaDeVenda);
            return View(await myDbContext.ToListAsync());
        }

        // GET: Pagamentos/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var pagamento = await _context.Pagamento
                .Include(p => p.NotaDeVenda)
                .FirstOrDefaultAsync(m => m.Idp == id);
            if (pagamento == null)
            {
                return NotFound();
            }

            return View(pagamento);
        }

        // GET: Pagamentos/Create
        public IActionResult Create()
        {
            ViewData["Id"] = new SelectList(_context.NotaDeVenda, "Id", "Id");
            return View();
        }

        // POST: Pagamentos/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Idp,DataLimite,Valor,Pago,Id")] Pagamento pagamento)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    _context.Add(pagamento);
                    await _context.SaveChangesAsync();
                    TempData["SuccessMessage"] = "Pagamento criado com sucesso!";
                    return RedirectToAction(nameof(Create));
                }
                catch(Exception ex)
                {
                    Console.WriteLine($"Erro ao criar pagamento: {ex.Message}");
                    TempData["ErrorMessage"] = "Erro ao criar Pagamento.";
                    throw;
                }
            }
            ViewData["Id"] = new SelectList(_context.NotaDeVenda, "Id", "Id", pagamento.Id);
            return View(pagamento);
        }

        // GET: Pagamentos/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var pagamento = await _context.Pagamento.FindAsync(id);
            if (pagamento == null)
            {
                return NotFound();
            }
            ViewData["Id"] = new SelectList(_context.NotaDeVenda, "Id", "Id", pagamento.Id);
            return View(pagamento);
        }

        // POST: Pagamentos/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Idp,DataLimite,Valor,Pago,Id")] Pagamento pagamento)
        {
            if (id != pagamento.Idp)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(pagamento);
                    await _context.SaveChangesAsync();
                    TempData["SuccessMessage"] = "Dados editado com sucesso!";
                    return RedirectToAction(nameof(Edit), new{id});
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!PagamentoExists(pagamento.Idp))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
            }
            ViewData["Id"] = new SelectList(_context.NotaDeVenda, "Id", "Id", pagamento.Id);
            return View(pagamento);
        }

        // GET: Pagamentos/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var pagamento = await _context.Pagamento
                .Include(p => p.NotaDeVenda)
                .FirstOrDefaultAsync(m => m.Idp == id);
            if (pagamento == null)
            {
                return NotFound();
            }

            return View(pagamento);
        }

        // POST: Pagamentos/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            try
            {
                var pagamento = await _context.Pagamento.FindAsync(id);
                if (pagamento == null)
                {
                    TempData["ErrorMessage"] = "Pagamento não encontrado.";
                }
                else 
                {
                    _context.Pagamento.Remove(pagamento);
                    await _context.SaveChangesAsync();
            
                    TempData["SuccessMessage"] = "Dados deletado com sucesso!";
                    TempData["DeletedClienteId"] = id;
                }

              return RedirectToAction(nameof(Index));
            }  
            catch(Exception ex)
            {
                TempData["ErrorMessage"] = $"Erro ao deletar dados: {ex.Message}";
                return RedirectToAction(nameof(Index));
            } 
        }

        private bool PagamentoExists(int id)
        {
            return _context.Pagamento.Any(e => e.Idp == id);
        }
    }
}
